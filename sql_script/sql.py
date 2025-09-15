import sqlite3

# ensure to activate the venv before running this script
# This is a script made to ping a sqllite3 server which stores my firefox bookmarks and create a markdown file with all of those links

# path to your Firefox profile's places.sqlite (absolute path) [via Windows Subsystem for Linux]
db_path = "/mnt/c/Users/lucas/AppData/Roaming/Mozilla/Firefox/Profiles/qiejfv27.default-release/places.sqlite"

conn = sqlite3.connect(db_path) # connect to the database referenced by places.sqlite
cursor = conn.cursor()

query = """
SELECT moz_bookmarks.title, moz_places.url
FROM moz_bookmarks
JOIN moz_places ON moz_bookmarks.fk = moz_places.id
WHERE moz_bookmarks.title IS NOT NULL
ORDER BY moz_bookmarks.dateAdded DESC;
"""

with open("../public/docs/writings/bookmarks.md", "w", encoding="utf-8") as f:
    for title, url in cursor.execute(query):
        f.write(f"- [{title}]({url})\n")

conn.close()