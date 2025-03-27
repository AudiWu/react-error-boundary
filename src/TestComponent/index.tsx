interface Props {
    error: boolean
}

function TestComponent ({error}: Props) {
    if(error) {
        throw new Error('Oops, something went wrong!');
    }

    return <div>Test Component</div>
}

export default TestComponent