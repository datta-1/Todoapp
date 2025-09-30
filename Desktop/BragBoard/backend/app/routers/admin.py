from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.user import User
from typing import List
from app.models.schemas import UserResponse

router = APIRouter(prefix="/admin", tags=["Admin"])

@router.get("/users", response_model=List[UserResponse])
def get_all_users(db: Session = Depends(get_db)):
    """Get all users - Admin endpoint for viewing user data"""
    users = db.query(User).all()
    return users

@router.get("/users/count")
def get_user_count(db: Session = Depends(get_db)):
    """Get total user count"""
    count = db.query(User).count()
    return {"total_users": count}

@router.get("/users/search/{email}")
def search_user_by_email(email: str, db: Session = Depends(get_db)):
    """Search user by email"""
    user = db.query(User).filter(User.email == email).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@router.get("/users/department/{department}")
def get_users_by_department(department: str, db: Session = Depends(get_db)):
    """Get users by department"""
    users = db.query(User).filter(User.department == department).all()
    return users