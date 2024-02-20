import json
from pymongo.mongo_client import MongoClient, database

db: database.Database


def load_secrets():
    with open("./secrets.json") as secrets_file:
        secrets = json.load(secrets_file)
    return secrets


def connect():
    global db
    secrets = load_secrets()
    host = secrets["DB_HOST"]
    user = secrets["DB_USER"]
    password = secrets["DB_PASSWORD"]
    uri = f"mongodb+srv://{user}:{password}@{host}/?retryWrites=true&w=majority"
    client = MongoClient(uri)
    db = client["worlds"]
