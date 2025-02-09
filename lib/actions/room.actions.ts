"use server";

import { v4 as uuidv4 } from 'uuid';
import { liveblocks } from '../liveblocks';
import { revalidatePath } from 'next/cache';
import { parseStringify } from '../utils';


export const createDocument = async ({ userId, email }: CreateDocumentParams) => {
    const roomId = uuidv4();

    try {
        const metadata = {
            creatorId: userId,
            email,
            title: 'Untitled'
        }

        const usersAccesses: RoomAccesses = {
            [email]: ['room:write']
        }


        const room = await liveblocks.createRoom(roomId, {
            metadata,
            usersAccesses,
            defaultAccesses: [],
        });

        revalidatePath('/')

        return parseStringify(room);

    } catch (error) {
        console.log(`error occurred while creating a room ${error}`);
    }
}