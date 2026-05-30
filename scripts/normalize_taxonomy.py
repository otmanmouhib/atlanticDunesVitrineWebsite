import re
from pathlib import Path

files = [Path('data/services.ts'), Path('data/products.ts'), Path('data/boutique.ts')]
for file in files:
    text = file.read_text(encoding='utf-8')
    text = re.sub(r'^(\s*)pole:\s*"([^\"]+)",\r?\n', r'\1pole: "\2",\n\1poleId: "\2",\n', text, flags=re.M)
    text = re.sub(r'^(\s*)domain:\s*"([^\"]+)",\r?\n', r'\1domain: "\2",\n\1domainId: "\2",\n', text, flags=re.M)
    file.write_text(text, encoding='utf-8')
    print('updated', file)
