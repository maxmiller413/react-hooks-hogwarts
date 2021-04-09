
function Filter({greased, onChangeShowGreased, showSorted, onSorteded}) {

        console.log(greased, onChangeShowGreased)

        function handleToggleGreased(event) {
            onChangeShowGreased(event.target.checked)
        }

        function handleChangeSortBy(event) {
            onSorteded(event.target.value)

        }

        return (
            <div className="filterWrapper">
			<div className="ui menu">
                <div className="ui item">
                    <label>Sort by </label>
                </div>
                    <div className="ui item">
                        <select
                            className="ui selection dropdown"
                            name="sort"
                            onChange={handleChangeSortBy}
                            value={showSorted}
                        >
                            <option value="name">Name</option>
                            <option value="weight">Weight</option>
                        </select>
                    </div>
				<div className="ui item">
					<label>Greased Pigs Only?</label>
				</div>
				<div className="ui item">
					<input
						className="ui toggle checkbox"
						checked={greased}
						onChange={handleToggleGreased}
						type="checkbox"
					/>
				</div>
			</div>
		</div>
        )

}

export default Filter