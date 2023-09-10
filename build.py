import os
import json

manifest = json.load(open('manifest.json'))
name = manifest['name']
version = manifest['version']

if not os.path.isdir('build'):
    os.mkdir('build')

filename = f'{name}-{version}.zip'
os.system(f"zip -r -FS build/{filename} * \
        --exclude '*.git*' \
        --exclude 'build*'")

