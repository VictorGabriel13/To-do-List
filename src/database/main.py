import sqlite3

banco = sqlite3.connect('banco_task.db')

cursor = banco.cursor()

#cursor.execute("CREATE TABLE task (inputsText text, data text)")

cursor.execute("INSERT INTO task VALUES('Estudar', '12/05')")

#banco.commit()

cursor.execute("SELECT * FROM task")

print(cursor.fetchall())