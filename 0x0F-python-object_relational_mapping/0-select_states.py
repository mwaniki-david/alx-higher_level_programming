#!/urs/bin/python3
#!/usr/bin/env python3
import MySQLdb
import sys

if __name__ == '__main__':
        username = sys.argv[1]
            password = sys.argv[2]
                dbname = sys.argv[3]

                    db = MySQLdb.connect(host="localhost", port=3306, user=username,
                                                     passwd=password, db=dbname, charset="utf8")

                        cur = db.cursor()
                            cur.execute("SELECT * FROM states ORDER BY id ASC")
                                states = cur.fetchall()
                                    for state in states:
                                                print(state)
                                                    cur.close()
                                                        db.close()

