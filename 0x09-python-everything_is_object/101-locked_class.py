#!/usr/bin/python3
"""

This is a module that contains a class that avoids
dynamically created attributes

"""


class LockedClass:
    """A locked class that only lets the user dynamically create the instance
    attribute 'first_name'"""
    __slots__ = ['first_name']
