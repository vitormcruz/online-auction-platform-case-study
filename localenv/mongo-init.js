/**
 * This is a bullshit file needed by the MondgoDB because it's container creation do not create the database even if
 * I explicitly set MONGO_INITDB_DATABASE environment variable, I must also provide something to put inside it because,
 * for some reason, they dislike empty databases.
 */

use("mydatabase");
db.createCollection("dummy");