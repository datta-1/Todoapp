from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import auth, admin
from app.database import engine
from app.models import user
import uvicorn

# Create tables on startup
def create_tables():
    user.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="BragBoard API",
    description="Internal Employee Recognition System",
    version="1.0.0"
)

# Create tables when the app starts
@app.on_event("startup")
async def startup_event():
    create_tables()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(admin.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to BragBoard API"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8001)
