// Map Redux state to component props
export default function mapStateToProps(state) {
    return {
        homeMenus: state.homeMenus,
        startUp:state.startUp
    }
}