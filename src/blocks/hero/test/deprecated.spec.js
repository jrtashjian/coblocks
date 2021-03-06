/**
 * Internal dependencies.
 */
import * as helpers from '../../../../.dev/tests/jest/helpers';
import { name, settings } from '../index';

const variations = {
	layout: [ 'top-left', 'top-center', 'top-right', 'center-left', 'center-center', 'center-right', 'bottom-left', 'bottom-center', 'bottom-right' ],
	fullscreen: [ true, false ],
	paddingTop: [ 0, 100 ],
	paddingRight: [ 0, 100 ],
	paddingBottom: [ 0, 100 ],
	paddingLeft: [ 0, 100 ],
	paddingTopTablet: [ 0, 100 ],
	paddingRightTablet: [ 0, 100 ],
	paddingBottomTablet: [ 0, 100 ],
	paddingLeftTablet: [ 0, 100 ],
	paddingTopMobile: [ 0, 100 ],
	paddingRightMobile: [ 0, 100 ],
	paddingBottomMobile: [ 0, 100 ],
	paddingLeftMobile: [ 0, 100 ],
	paddingUnit: [ 'px', 'em', '%' ],
	paddingSize: [ 'no', 'small', 'medium', 'large', 'advanced' ],
	paddingSyncUnits: [ true, false ],
	paddingSyncUnitsTablet: [ true, false ],
	paddingSyncUnitsMobile: [ true, false ],
	marginTop: [ 0, 100 ],
	marginRight: [ 0, 100 ],
	marginBottom: [ 0, 100 ],
	marginLeft: [ 0, 100 ],
	marginTopTablet: [ 0, 100 ],
	marginRightTablet: [ 0, 100 ],
	marginBottomTablet: [ 0, 100 ],
	marginLeftTablet: [ 0, 100 ],
	marginTopMobile: [ 0, 100 ],
	marginRightMobile: [ 0, 100 ],
	marginBottomMobile: [ 0, 100 ],
	marginLeftMobile: [ 0, 100 ],
	marginUnit: [ 'px', 'em', '%' ],
	marginSize: [ 'no', 'small', 'medium', 'large', 'advanced' ],
	marginSyncUnits: [ true, false ],
	marginSyncUnitsTablet: [ true, false ],
	marginSyncUnitsMobile: [ true, false ],
	hasMarginControl: [ true, false ],
	hasAlignmentControls: [ true, false ],
	hasStackedControl: [ true, false ],
	backgroundType: [ undefined, '', 'image', 'video' ],
	backgroundImg: [ undefined, '', 'https://website.com/wp-content/uploads/1234/56/image.jpg', 'https://website.com/wp-content/uploads/1234/56/video.mp4' ],
	backgroundPosition: [ undefined, '' ],
	backgroundRepeat: [ 'no-repeat', 'repeat', 'repeat-x', 'repeat-y' ],
	backgroundSize: [ 'cover', 'contain' ],
	backgroundOverlay: [ 0, 100 ],
	backgroundColor: [ undefined, 'primary' ],
	customBackgroundColor: [ '#123456' ],
	hasParallax: [ true, false ],
	focalPoint: [ undefined, { x: 0, y: 0 }, { x: 0.33663366336633666, y: 0.8335193452380952 } ],
	videoMuted: [ true, false ],
	videoLoop: [ true, false ],
	openPopover: [ true, false ],
	height: [ 0, 1000 ],
	heightTablet: [ 0, 1000 ],
	heightMobile: [ 0, 1000 ],
	syncHeight: [ true, false ],
	align: [ '', 'wide', 'full' ],
	contentAlign: [ undefined, 'left', 'center', 'right' ],
	textColor: [ undefined, 'primary' ],
	customTextColor: [ undefined, '#123456' ],
	maxWidth: [ 750 ],
	saveCoBlocksMeta: [ true, false ],
};

helpers.testDeprecatedBlockVariations( name, settings, variations );
