import fetch from 'node-fetch'

const { APIKEY } = process.env

export default async function handler(request, response) {
  const { title, page, id } = JSON.parse(request.body)
  //id가 있으면 상세정보요청, 아니면 목록 검색
  const url = id
    ? `https://omdbapi.com?apikey=${APIKEY}&i=${id}&plot=full`
    : `https://omdbapi.com?apikey=${APIKEY}&s=${title}&page=${page}`

  const res = await fetch(url)
  const json = await res.json()

  response.status(200).json(json)
}
