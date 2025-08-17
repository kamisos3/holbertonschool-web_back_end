#!/usr/bin/env python3
"""Inserts a new document to a collection"""

def insert_school(mongo_collection, **kwargs):
    """Using kwargs to insert a nee document to a collection"""
    result = mongo_collection.insert_one(kwargs)

    return result.inserted_id
