// Map Redux state to component props
export default function mapStateToProps(state) {
    return {
        value: state.count
    }
}