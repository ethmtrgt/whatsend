import os
import json

manifest = json.load(open('manifest.json'))
name = manifest['name']
version = manifest['version']

filename = f'{name}-{version}.zip'
os.system(f"zip -r -FS build/{filename} * \
        --exclude '*.git*' \
        --exclude '*.py' \
        --exclude 'build'")

