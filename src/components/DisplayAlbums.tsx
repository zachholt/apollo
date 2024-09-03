'use client'

import { useGetAlbumsQuery } from "@/gql/graphql";
import { useQuery } from "@apollo/client";

const DisplayAlbums = () => {
    const { data, loading, error } = useGetAlbumsQuery();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <div>
            <h1>Albums</h1>
            <ul>
                {data?.albums?.data?.map((album) => (
                    <li key={album.id}>{album.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default DisplayAlbums;