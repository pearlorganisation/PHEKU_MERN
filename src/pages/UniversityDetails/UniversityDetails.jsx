import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUniversityById } from '../../features/actions/universitiesAction';
import { useParams } from 'react-router-dom';

const UniversityDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams()
  const { universityInfo }= useSelector((state)=> state.university)
  useEffect(()=>{
    dispatch(getUniversityById(id))
  },[id])

  if(!universityInfo){
    return <div>Loading...</div>
  }
  return (
    <div>UniversityDetails</div>
  )
}

export default UniversityDetails