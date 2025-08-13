#!/usr/bin/env python3
"""Provides stats about Nginx logs stored in MongoDB"""

from pymongo import MongoClient

if __name__ == "__main__":
    client = MongoClient("mongodb://127.0.0.1:27017")
    collection = client.logs.nginx

    total_logs = collection.count_documents({})
    print(f"{total_logs} logs")
    print("Methods:")
    print(f"\tmethod GET: {collection.count_documents({'method': 'GET'})}")
    print(f"\tmethod POST: {collection.count_documents({'method': 'POST'})}")
    print(f"\tmethod PUT: {collection.count_documents({'method': 'PUT'})}")
    print(f"\tmethod PATCH: {collection.count_documents({'method': 'PATCH'})}")
    print(f"\tmethod DELETE: {collection.count_documents({'method': 'DELETE'})}")
    status_count = collection.count_documents(
        {"method": "GET", "path": "/status"}
    )
    print(f"{status_count} status check")
