/**
 * Core type definitions for the video location mapping service
 */

export interface VideoLocation {
  id: string;
  videoId: string;
  videoTitle: string;
  channelName: string;
  placeName: string;
  placeAddress?: string;
  latitude: number;
  longitude: number;
  timestamp: number; // seconds in the video
  thumbnailUrl?: string;
  createdAt: Date;
}

export interface MapMarker {
  id: string;
  position: {
    lat: number;
    lng: number;
  };
  placeName: string;
  videos: VideoTimestamp[];
}

export interface VideoTimestamp {
  videoId: string;
  videoTitle: string;
  channelName: string;
  timestamp: number;
  thumbnailUrl?: string;
}

export interface YouTubeVideoInfo {
  id: string;
  title: string;
  channelName: string;
  thumbnailUrl: string;
  duration: number;
}
