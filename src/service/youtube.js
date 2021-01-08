class Youtube {
  constructor(httpClint) {
    this.youtube = httpClint;
  }

  async mostPopular() {
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 25,
        regionCode: "kr",
      },
    });
    return response.data.items;
  }

  async search(query) {
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 25,
        type: "video",
        q: query,
        regionCode: "kr",
      },
    });
    return response.data.items;
  }
}

export default Youtube;
