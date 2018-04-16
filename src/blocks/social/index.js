import Inspector from './components/inspector';
import Controls from './components/controls';

import './styles/editor.scss';
import './styles/style.scss';

const { __ } = wp.i18n;

const { Component } = wp.element;

const { registerBlockType } = wp.blocks;

class SocialBlock extends Component {

	render() {

		const {
			attributes,
			className,
			isSelected,
			setAttributes,
		} = this.props;

		const {
			align,
			backgroundColor,
			facebook,
			linkedin,
			pinterest,
			size,
			space,
			tumblr,
			twitter,
		} = attributes;

		const iconStyle = {
			backgroundColor: backgroundColor,
			height: size ? size + 'px' : undefined,
			margin: '0' + space ? space + 'px' : undefined,
			width: size ? size + 'px' : undefined,
		};

		return [
			isSelected && (
				<Controls
					{ ...this.props }
				/>
			),
			isSelected && (
				<Inspector
					{ ...this.props }
				/>
			),
			<div className={ className } style={ { textAlign: align } }>
				<p>
					{ twitter &&
						<a className={ 'wp-block-coblocks-social__button button--twitter icon--coblocks' } style={ iconStyle }>
							<span className={ 'screen-reader-text' }>
								{ __( 'Share on Twitter' ) }
							</span>
						</a>
					}

					{ facebook &&
						<a className={ 'wp-block-coblocks-social__button button--facebook icon--coblocks' } style={ iconStyle }>
							<span className={ 'screen-reader-text' }>
								{ __( 'Share on Facebook' ) }
							</span>
						</a>
					}

					{ pinterest &&
						<a className={ 'wp-block-coblocks-social__button button--pinterest icon--coblocks' } style={ iconStyle }>
							<span className={ 'screen-reader-text' }>
								{ __( 'Share on Pinterest' ) }
							</span>
						</a>
					}

					{ linkedin &&
						<a className={ 'wp-block-coblocks-social__button button--linkedin icon--coblocks' } style={ iconStyle }>
							<span className={ 'screen-reader-text' }>
								{ __( 'Share on LinkedIn' ) }
							</span>
						</a>
					}

					{ tumblr &&
						<a className={ 'wp-block-coblocks-social__button button--tumblr icon--coblocks' } style={ iconStyle }>
							<span className={ 'screen-reader-text' }>
								{ __( 'Share on Tumblr' ) }
							</span>
						</a>
					}
				</p>
			</div>
		];
	}
}

registerBlockType( 'coblocks/social', {

	title: __( 'Social ' ),

	description: __( 'Add a social sharing module.' ),

	icon: 'share',

	category: 'common',

	keywords: [
		__( 'share' ),
		__( 'twitter' ),
		__( 'coblocks' ),
	],

	supports: {
		customClassName: false,
		html: false,
	},

	edit: SocialBlock,

	save() {
		return null;
	},
} );
