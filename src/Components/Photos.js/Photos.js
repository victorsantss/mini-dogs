import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { loadNewPhotos } from "../../store/photos";
import { PhotosContent } from "../PhotosContent/PhotosContent";
import { PhotosLoadMore } from "../PhotosLoadMore/PhotosLoadMore";

export const Photos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadNewPhotos(1));
  }, [dispatch])

  return (
    <div>
      <section>
        <PhotosContent />
        <PhotosLoadMore />
      </section>
    </div>
  )
}