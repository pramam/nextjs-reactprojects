import React from 'react'
import Image from 'next/image'
import { IBirthday } from './definitions'

export interface IProps {
    birthday: IBirthday
}

export default function Birthday({ birthday }: IProps) {
    return (
        <div>
            <li>
                <div className="flex mb-5 max-w-xs">
                    <Image className="rounded-full" src={birthday.image} alt="image" height={70} width={70} />
                    <div className="self-center pl-4 flex flex-col">
                        <div className="font-semibold">{birthday.name}</div>
                        <div className="text-gray-500 font-semibold text-sm">{birthday.age} years</div>
                    </div>
                </div>
            </li>
        </div>
    )
}
