import axios from 'axios';
import {API_BASE_URL, TypesOfArts} from '../constants/api';

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
    const response = await axios.get<ApiResponse>(`${API_BASE_URL}${TypesOfArts.artwork}?page=${page}&limit=${limit}`);

    // TODO: mapear la respuesta en lo que se necesita porque el obj es muy grande
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getOneArtworkById = async (artworkId: number): Promise<ApiResponse> => {
  try {
    const response = await axios.get<ApiResponse>(`${API_BASE_URL}${TypesOfArts.artwork}/${artworkId}`);
  // TODO: mapear la respuesta en lo que se necesita porque el obj es muy grande
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};