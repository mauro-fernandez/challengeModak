import axios from 'axios';

const API_BASE_URL = 'https://api.artic.edu/api/v1/artworks';

interface Artwork {
  id: number;
  title: string;
  artist_title: string;
  thumbnail: any;
  dimensions: string;
}

interface ApiResponse {
  data: Artwork[];
}

export const getAllArtwork = async (
  page: number = 1,
  limit: number = 100,
): Promise<ApiResponse> => {
  try {
    const response = await axios.get<ApiResponse>(`${API_BASE_URL}?page=${page}&limit=${limit}`);

    // mapear la respuesta en lo que se necesita porque el obj es muy grande
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getOneArtworkById = async (artworkId: number): Promise<ApiResponse> => {
  try {
    const response = await axios.get<ApiResponse>(`${API_BASE_URL}/${artworkId}`);

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};