import { notFound } from '@tanstack/react-router'
//import axios from 'redaxios'

export type PostType = {
  id: string
  title: string
  body: string
}

export const fetchPost = async (postId: string) => {
  console.info(`Fetching post with id ${postId}...`)
  await new Promise((r) => setTimeout(r, 500))

  

  return new Promise((r) => r({titie:'title0', body:'contents0'}))
}

export const fetchPosts = async () => {
  console.info('Fetching posts...')
  await new Promise((r) => setTimeout(r, 500))
  return new Promise((r) => r([{titie:'title0', body:'contents0'},{titie:'title1', body:'contents1'}]))
}
