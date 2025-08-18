#!/usr/bin/env python3
"""Function changes all topics of a school doc based on name"""


def update_topics(mongo_collection, name, topics):
    """Changes all topics of a document"""
    mongo_collection.update(
        { "name": name },
        { "$set": { "topics": topics } }
    )
