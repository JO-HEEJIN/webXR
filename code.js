// 기존의 createScene 함수에 추가
var xrHelper = await scene.createDefaultXRExperienceAsync({floorMeshes: [polygon]});

// 폴리곤 메시에 대한 히트 테스트 수행
var hitTestObservable = xrHelper.baseExperience.featuresManager.enableFeature(BABYLON.WebXRHitTest, 'latest', {hitTestType: BABYLON.WebXRHitTest.HIT_TEST_TYPE_PLANE});

hitTestObservable.onHitTestResultObservable.add((results) => {
    if (results.length) {
        var hit = results[0];
        // hit.position, hit.xrHitResult - 이를 사용하여 히트 테스트 결과 처리
    }
});

// 제스처 인식
var gestureManager = new BABYLON.WebXRAbstractMotionControllerPointerSelection(scene, xrHelper.input);
gestureManager.onGestureObservable.add((eventData) => {
    switch (eventData.eventType) {
        case BABYLON.WebXRControllerPointerSelection.GESTURE_EVENT_TYPES.TAP:
            // 탭 제스처 처리
            break;
        case BABYLON.WebXRControllerPointerSelection.GESTURE_EVENT_TYPES.DOUBLE_TAP:
            // 더블 탭 제스처 처리
            break;
        // 추가적인 제스처 이벤트 처리
    }
});
