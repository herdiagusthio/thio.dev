#!/usr/bin/env python3
import os
import shutil
import argparse
from datetime import datetime

SB_ROOT = "/home/thiohermes/code-storage/second-brain"
SITE_ROOT = "/home/thiohermes/code-storage/thio.dev"

MAPPING = {
    "decisions": "decisions",
    "journal": "engineering", # Promoted journal entries go to engineering
    "projects": "engineering" # Standard engineering showcase
}

def promote(source_type, filename):
    if source_type not in MAPPING:
        print(f"Unknown source type: {source_type}")
        return

    src_path = os.path.join(SB_ROOT, source_type, filename)
    if not os.path.exists(src_path):
        print(f"Source file not found: {src_path}")
        return

    target_dir = os.path.join(SITE_ROOT, "src/content", MAPPING[source_type])
    os.makedirs(target_dir, exist_ok=True)
    
    dest_path = os.path.join(target_dir, filename)
    shutil.copy2(src_path, dest_path)
    print(f"Promoted {filename} from {source_type} to {MAPPING[source_type]}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("type", choices=MAPPING.keys())
    parser.add_argument("file")
    args = parser.parse_args()
    promote(args.type, args.file)
