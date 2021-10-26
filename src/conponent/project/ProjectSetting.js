import React from 'react';

function ProjectSetting({match}) {
  return (
    <div>
        <h2>{match.params.projectId}</h2>
        <p>프로젝트 세팅 및 reviewtwits 적용 코드 제공</p>
    </div>
  );
}

export default ProjectSetting;