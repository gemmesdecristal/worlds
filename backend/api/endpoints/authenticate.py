import json
from bson import ObjectId
from flask import Blueprint, request
import database.core as database

authenticate_bp = Blueprint("authenticate", __name__)


@authenticate_bp.route("/authenticate", methods=["POST"])
def authenticate():
    data = request.get_json()
    try:
        character_object_id = ObjectId(data["character_id"])
    except:
        return json.dumps({"error": "Invalid character ID"}), 400

    game = database.db.get_collection("game").find_one({"name": data["game_name"]})
    character = database.db.get_collection("character").find_one(
        {"_id": character_object_id}
    )

    if game is None:
        return json.dumps({"error": "Game not found"}), 404
    if character is None:
        return json.dumps({"error": "Character not found"}), 404

    return json.dumps(
        {
            "authenticated": True,
            "game_id": str(game["_id"]),
            "character_id": str(character["_id"]),
        }
    )
