#!/usr/bin/env python3
"""Function gives stats of logs stored in mongodb"""

from pymongo import MongoClient

def mongo_logs():
    """Prints logs from MongoDB"""
    client = MongoClient('mongodb://127.0.0.1:27017')

    db = client.logs
    collection = client.logs.nginx

    total_logs = collection.count_documents({})
    print("{} logs".format(total_logs))

    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = collection.count_documents({"method": method})
        print(f"    method {method}: {count}")

    status_check = collection.count_documents({"method": "GET", "path": "/status"})
    print(f"{status_check} status check")

if __name__ == "__main__":
    mongo_logs()