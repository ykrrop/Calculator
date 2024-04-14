'use client'
import { useState } from 'react'

export default function Calculator() {
    const [value,setValue] = useState('')
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="p-5 rounded-xl bg-black text-white">
                <form action="">
                    <div className="flex justify-end mt-[5px] mb-[15px]">
                        <input value={value} className="text-right flex-1 text-4xl py-[5px] px-[10px] bg-gray-700" type="text" />
                    </div>
                    <div>
                        <input type="button" value="AC" onClick={e => setValue('')}/>
                        <input type="button" value="DE" onClick={e => setValue(value.slice(0,-1))}/>
                        <input type="button" value="." onClick={e => setValue(value + e.target.value)}/>
                        <input type="button" value="/" onClick={e => setValue(value + e.target.value)}/>
                    </div>
                    <div>
                        <input type="button" value="7" onClick={e => setValue(value + e.target.value)}/>
                        <input type="button" value="8" onClick={e => setValue(value + e.target.value)}/>
                        <input type="button" value="9" onClick={e => setValue(value + e.target.value)}/>
                        <input type="button" value="*" onClick={e => setValue(value + e.target.value)}/>
                    </div>
                    <div>
                        <input type="button" value="4" onClick={e => setValue(value + e.target.value)}/>
                        <input type="button" value="5" onClick={e => setValue(value + e.target.value)}/>
                        <input type="button" value="6" onClick={e => setValue(value + e.target.value)}/>
                        <input type="button" value="+" onClick={e => setValue(value + e.target.value)}/>
                    </div>
                    <div>
                        <input type="button" value="1" onClick={e => setValue(value + e.target.value)}/>
                        <input type="button" value="2" onClick={e => setValue(value + e.target.value)}/>
                        <input type="button" value="3" onClick={e => setValue(value + e.target.value)}/>
                        <input type="button" value="-" onClick={e => setValue(value + e.target.value)}/>
                    </div>
                    <div>
                        <input type="button" value="00" onClick={e => setValue(value + e.target.value)}/>
                        <input type="button" value="0" onClick={e => setValue(value + e.target.value)}/>
                        <input className="w-[123px] " type="button" value="=" onClick={e => setValue(eval(value))}/>
                    </div>
                </form>
            </div>
        </div>
    )
}