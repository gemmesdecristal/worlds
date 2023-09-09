from flask import Blueprint

get_character_list_bp = Blueprint("get_character_list", __name__)


@get_character_list_bp.route("/characters", methods=["GET"])
def get_character_list():
    return [
        {
            "firstName": "Bob",
            "lastName": "Mauranne",
        },
        {
            "firstName": "John",
            "lastName": "Doe",
        },
    ]
