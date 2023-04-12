import React, { ChangeEvent } from 'react';
import type { sort, State } from '../../App';
import Store from '../../store';
import styles from './SelectorSection.module.css';

class SortedSelector extends React.Component {
	handleSortedSelector = (store: State | null) => (e: ChangeEvent<HTMLSelectElement>) => {
		store?.setSortState(e.target.value as sort);
	};
	render() {
		return (
			<Store.Consumer>
				{(store) => (
					<select name='sort' className={styles.selector} onChange={this.handleSortedSelector(store)}>
						<option value='이름순'>이름순</option>
						<option value='거리순'>거리순</option>
					</select>
				)}
			</Store.Consumer>
		);
	}
}

export default SortedSelector;