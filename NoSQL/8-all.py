#!/usr/bin/env python3
"""Lists all documents in a collection, uses Python"""


def list_all(mongo_collection):
    """Prints all documents in a mongo_collection"""
    documents = list(mongo_collection.find())
    return documents