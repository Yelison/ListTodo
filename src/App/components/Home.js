import React, { useState } from 'react';
import Form from './Form';
import PersonAdded from './PersonAdded';
import uuid from 'uuid';
import '../utils/hash';
import '../css/personAdded.css';

const Home = () => {
	const [ peopleList, setPeopleList ] = useState([]);
	return (
		<div>
			<Form setPeopleList={setPeopleList} peopleList={peopleList} />
			<div className="person-added">
				{peopleList.map((people) => {
					return <PersonAdded key={uuid.v4()} {...people} />;
				})}
			</div>
		</div>
	);
};

export default Home;
