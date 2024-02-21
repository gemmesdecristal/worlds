import json
from bson import ObjectId
from flask import Blueprint
import database.core as database

get_character_list_bp = Blueprint("get_character_list", __name__)

@get_character_list_bp.route("/character", methods=["GET"])
def get_character_list():
    data = database.db.get_collection("character").find()
    res = []
    for character in data :
        del character["_id"]
        res.append(character)
    return json.dumps(res)

@get_character_list_bp.route("/character/<char_id>", methods=["GET"])
def get_character(char_id: str):
    data = database.db.get_collection("character").find_one({"_id": ObjectId(char_id)})
    if data is None:
        return {"error": "Character not found"}, 404
    del data["_id"]
    return json.dumps(data)
