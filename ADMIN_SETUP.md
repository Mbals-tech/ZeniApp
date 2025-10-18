To create an admin user immediately, generate a bcrypt hash of your chosen password and insert into the users table with is_admin=true. Example node snippet:

const bcrypt = require('bcrypt');
bcrypt.hash('admin123', 10).then(console.log);

Then insert into Postgres:

INSERT INTO users (full_name, phone, email, password_hash, is_admin, referral_code) VALUES ('Admin','0824238988','zenivault5@gmail.com','<hash>', true, 'ADMIN001');
