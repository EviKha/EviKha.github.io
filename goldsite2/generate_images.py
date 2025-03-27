import json
import time
import requests
import base64
import os

class FusionBrainAPI:
    def __init__(self, url, api_key, secret_key):
        self.URL = url
        self.AUTH_HEADERS = {
            'X-Key': f'Key {api_key}',
            'X-Secret': f'Secret {secret_key}',
        }

    def get_pipeline(self):
        response = requests.get(self.URL + 'key/api/v1/pipelines', headers=self.AUTH_HEADERS)
        data = response.json()
        return data[0]['id']

    def generate(self, prompt, pipeline, images=1, width=1024, height=1024):
        params = {
            "type": "GENERATE",
            "numImages": images,
            "width": width,
            "height": height,
            "generateParams": {
                "query": prompt
            }
        }

        data = {
            'pipeline_id': (None, pipeline),
            'params': (None, json.dumps(params), 'application/json')
        }
        response = requests.post(self.URL + 'key/api/v1/pipeline/run', headers=self.AUTH_HEADERS, files=data)
        data = response.json()
        
        if 'uuid' not in data:
            print(f"Error in generate response: {data}")
            return None
            
        return data['uuid']

    def check_generation(self, request_id, attempts=20, delay=15):
        while attempts > 0:
            response = requests.get(self.URL + 'key/api/v1/pipeline/status/' + request_id, headers=self.AUTH_HEADERS)
            data = response.json()
            
            if data['status'] == 'DONE':
                return data['result']['files']
            elif data['status'] == 'FAIL':
                print(f"Generation failed: {data.get('errorDescription', 'Unknown error')}")
                return None
            elif data['status'] == 'INITIAL':
                print(f"Request is in queue, attempts left: {attempts}")
            elif data['status'] == 'PROCESSING':
                print(f"Processing image, attempts left: {attempts}")
                
            attempts -= 1
            time.sleep(delay)
        print("Timeout waiting for generation")
        return None

def save_base64_image(base64_string, filename):
    img_data = base64.b64decode(base64_string)
    with open(filename, 'wb') as f:
        f.write(img_data)

def main():
    api = FusionBrainAPI('https://api-key.fusionbrain.ai/', '7E9424751B87450F5B04CA3E00243783', 'C986CCE073DAC3D70E03EFD0751E62C0')
    pipeline_id = api.get_pipeline()

    # Создаем директорию для изображений если её нет
    if not os.path.exists('src/images'):
        os.makedirs('src/images')

    # Промпты для генерации изображений
    prompts = {
        'blog-trends': 'Modern business analytics dashboard with graphs and charts showing upward trends, neon green color scheme (#c8ff00), professional design, high quality, 4k',
        'blog-success': 'Success concept with glowing checkmark and digital elements, neon green color scheme (#c8ff00), professional business style, high quality, 4k',
        'blog-conversion': 'Conversion rate optimization concept with modern infographic elements, neon green color scheme (#c8ff00), professional design, high quality, 4k'
    }

    # Генерируем изображения
    for name, prompt in prompts.items():
        print(f"\nGenerating {name}...")
        uuid = api.generate(prompt, pipeline_id)
        
        if not uuid:
            print(f"Failed to start generation for {name}")
            continue
            
        files = api.check_generation(uuid)
        
        if files:
            save_base64_image(files[0], f'src/images/{name}.png')
            print(f"Successfully generated {name}")
            # Добавляем задержку между запросами
            time.sleep(30)
        else:
            print(f"Failed to generate {name}")

if __name__ == '__main__':
    main() 