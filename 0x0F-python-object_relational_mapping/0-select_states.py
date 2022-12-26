from sqlalchemy import create_engine, Session
"""Lists all states from the database hbtn_0e_0_usa"""

engine = create_engine('mysql+mysqldbl://{}@localhost/{}'.format("root", "root", "hbtn_0e_0_usa"), pool_pre_ping=True)
Base.metadata.create_all(engine)

session = 
