import React from 'react'
import UseStateExampleObj from '../components/examplecode/UseStateExampleObj'
import Counter from '../components/examplecode/Counter'
import UseEffectExample1 from '../components/examplecode/UseEffectExample1'
import ObjectManipulation from '../components/examplecode/ObjectManipulation'
import SampleForm from '../components/examplecode/Forms'

function tutorial() {
    return (
        <div>
            <UseStateExampleObj />
            <Counter />
            <UseEffectExample1 />
            {/* <ObjectManipulation /> */}
            <div className="mt-2 flex flex-row justify-center">
                <div className="animate animate-wiggle bg-yellow-400 h-12 w-12"></div>
            </div>
            <SampleForm />
        </div>
    )
}
export default tutorial
