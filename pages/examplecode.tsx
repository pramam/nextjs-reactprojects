import React from 'react'
import UseStateExampleObj from '../components/examplecode/UseStateExampleObj'
import Counter from '../components/examplecode/Counter'
import UseEffectExample1 from '../components/examplecode/UseEffectExample1'
import ObjectManipulation from '../components/examplecode/ObjectManipulation'
import SampleForm from '../components/examplecode/Forms'
import FormMultipleInputs from '../components/examplecode/FormMultipleInputs'
import UseRefExample from '../components/examplecode/UseRefExample'
import TransitionHeightExample from '../components/examplecode/TransitionHeightExample'
import TailwindTransitionExample from '../components/examplecode/TailwindTransitionExample'
import UseReducerExample from '../components/examplecode/UseReducerExample'
import PropDrilling from '../components/examplecode/PropDrilling'
import UseContextExample from '../components/examplecode/UseContextExample'
import PropTypes from '../components/examplecode/PropTypes'

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
            <FormMultipleInputs />
            <UseRefExample />
            <TransitionHeightExample />
            <TailwindTransitionExample />
            <UseReducerExample />
            <PropDrilling />
            <UseContextExample />
            <PropTypes />
        </div>
    )
}
export default tutorial
