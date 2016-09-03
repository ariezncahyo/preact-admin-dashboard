import { h, Component } from 'preact';
import { Card, TextField, Button, Icon, CheckBox, Layout, Radio } from 'preact-mdl';
import './style';

export default class Forms extends Component {

	render() {
		return (
			<div>
				<div class="mdl-grid">
					<Card shadow="1" class="mdl-cell mdl-cell--6-col">
						<div class="mdl-card__title">
							<h2 class="mdl-card__title-text">Basic Usage</h2>
						</div>
						<Card.Text>

							<form>
								<TextField
									floating-label
									label="Title"
									type="text"
									value="Frontend Engineer"
									class="mdl-cell--12-col"
								/>
							</form>

							<form>
								<TextField
									floating-label
									label="Email"
									type="email"
									value="me@mukidi.co"
									class="mdl-cell--12-col"
								/>
							</form>

							<form>
								<TextField
									floating-label
									label="Company (disabled)"
									type="text"
									value="Mukidi Labs .inc"
									class="mdl-cell--12-col"
									disabled
								/>
							</form>


							<form>
								<TextField
									floating-label
									label="First Name"
									type="text"
									class="mdl-cell--12-col"
								/>
							</form>

							<form>
								<TextField
									floating-label
									label="Last Name"
									type="text"
									class="mdl-cell--12-col"
								/>
							</form>

							<form>
								<TextField
									floating-label
									label="Bio"
									type="text"
									value="Mukidi is a viral name in Indonesia nowadays
He wants to be a Frontend engineer!"
									class="mdl-cell--12-col"
									multiline
								/>
							</form>

							<form>
								<CheckBox>Checkbox</CheckBox>

								<CheckBox checked="true">Checkbox : checked</CheckBox>

								<CheckBox disabled>Checkbox : disabled</CheckBox>
							</form>

							<Layout.Spacer />

							<form>
								<TextField
									type="file"
									upload
								/>
							</form>

							<div class="mdl-card__actions">
								<form action="javascript:;">
									<Button colored raised>Submit</Button>
									<Button colored>Clear</Button>
								</form>
							</div>
						</Card.Text>
					</Card>
				</div>
			</div>
		);
	}
}
