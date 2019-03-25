import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import { getCalendar } from '../actions/index';

import './css/react-big-calendar.css';

import Modal from './Modal';

const localizer = BigCalendar.momentLocalizer(moment);

function Event({ event }) {
	return (
		<Fragment>
			<strong>{event.title}</strong>
			{/* <div>{event.instructor_name}</div> */}
		</Fragment>
	);
}

class Calendar extends Component {
	state = {};

	componentDidMount() {
		this.props.getCalendar();
	}

	eventStyleGetter = (event, start, end, isSelected) => {
		let style = {
			backgroundColor:
				this.state.modal &&
				this.state.modal.class_time_id === event.class_time_id
					? '#7b8d9d'
					: '#98a7b3',
			border: 'none'
		};

		if (event.attending) {
			style = {
				...style,
				backgroundColor:
					this.state.modal &&
					this.state.modal.class_time_id === event.class_time_id
						? '#0083b3'
						: '#00bbff'
			};
		}

		return {
			style: style
		};
	};

	handleSelectEvent = (event, e) => {
		// this.props.history.push(`/classes/${event.class_id}`);

		this.setState({ modal: event });
	};

	closeModal = () => {
		this.setState({ modal: undefined });
	};

	render() {
		const events = this.props.calendar
			? this.props.calendar.map(event => ({
					...event,
					title: event.class_name,
					start: new Date(event.start_time),
					end: new Date(event.end_time)
			  }))
			: [];

		return (
			<Fragment>
				{/* <Tabs /> */}
				<div className="CalendarContainer" style={{ height: '800px' }}>
					<BigCalendar
						events={events}
						step={30}
						timeslots={2}
						localizer={localizer}
						views={['month', 'week']}
						defaultView={BigCalendar.Views.WEEK}
						defaultDate={new Date()}
						showMultiDayTimes={false}
						components={{
							event: Event
						}}
						eventPropGetter={this.eventStyleGetter}
						onSelectEvent={this.handleSelectEvent}
					/>
				</div>

				{this.state.modal && (
					<Modal event={this.state.modal} closeModal={this.closeModal} />
				)}
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	return state;
};
export default connect(
	mapStateToProps,
	{
		getCalendar
	}
)(Calendar);
