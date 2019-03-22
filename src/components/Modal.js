// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

import moment from 'moment';

import { attendClass, buyPass, clearPass, getCalendar } from '../actions/index';

// Styles
import styled from 'styled-components';

const ModalShade = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(200, 210, 210, 0.4);
	z-index: 10;
`;

const ModalBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	top: 45%;
	left: 50%;
	width: 360px;
	height: 500px;
	background: white;
	padding: 43px 62px;
	border: 1px solid #9a9a9a;
	border-radius: 10px;
	box-shadow: 0 0 10px black;
	transform: translate(-50%, -50%);
	z-index: 20;
`;

class Modal extends Component {
	render() {
		return (
			<React.Fragment>
				<ModalShade onClick={this.props.closeModal} />

				<ModalBox>
					<p>{moment(this.props.event.start).format('MMMM Do')}</p>
					<h3>
						{moment(this.props.event.start).format('h:mm A - ') +
							moment(this.props.event.end).format('h:mm A')}
					</h3>
					<p>{this.props.event.class_name}</p>
					<p>{this.props.event.instructor_name}</p>
					<p>{this.props.event.category_name}</p>
					<p>{`${this.props.event.punch_count} pass${
						this.props.event.punch_count === 1 ? '' : 'es'
					} left`}</p>

					{this.props.working ? (
						<p>...</p>
					) : (
						<React.Fragment>
							<p
								onClick={() =>
									this.props.buyPass(this.props.event.class_id, () =>
										this.props.getCalendar(this.props.closeModal)
									)
								}
							>
								Buy more passes
							</p>

							{this.props.event.punch_count ? (
								this.props.event.attending ? (
									this.props.event.start > moment.utc().toDate() ? (
										<h2>You're going!</h2>
									) : (
										<h2>Thanks for coming!</h2>
									)
								) : (
									<h2
										onClick={() =>
											this.props.attendClass(
												this.props.event.class_id,
												this.props.event.class_time_id,
												() => this.props.getCalendar(this.props.closeModal)
											)
										}
									>
										Attend this class
									</h2>
								)
							) : (
								<p
									onClick={() =>
										this.props.clearPass(this.props.event.class_id, () =>
											this.props.getCalendar(this.props.closeModal)
										)
									}
								>
									Remove from calendar
								</p>
							)}
						</React.Fragment>
					)}
				</ModalBox>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	return state;
};
export default connect(
	mapStateToProps,
	{
		attendClass,
		buyPass,
		clearPass,
		getCalendar
	}
)(Modal);
