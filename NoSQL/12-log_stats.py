#!/usr/bin/env python3
"""log stats from collection"""

from pymongo import MongoClient


if __name__ == "__main__":
    client = MongoClient("mongodb://127.0.0.1:27017")
    col = client.logs.nginx

    # 1st line
    print("{} logs".format(col.count_documents({})))

    # 2nd line
    print("Methods:")

    # exactly these 5 lines, in this order, with a TAB before 'method'
    print("\tmethod GET: {}".format(col.count_documents({"method": "GET"})))
    print("\tmethod POST: {}".format(col.count_documents({"method": "POST"})))
    print("\tmethod PUT: {}".format(col.count_documents({"method": "PUT"})))
    print("\tmethod PATCH: {}".format(col.count_documents({"method": "PATCH"})))
    print("\tmethod DELETE: {}".format(col.count_documents({"method": "DELETE"})))

    # last line
    print("{} status check".format(col.count_documents(
        {"method": "GET", "path": "/status"})))
