import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const supervisorAndAssessor = [
    {name: 'Ee Kiam Keong', position: 'Supervisor', email: 'kkeesg@yahoo.com.sg'},
    {name: 'Premrajan Ponnambath', position: 'Accessor', email: 'premrajan_p@yahoo.com'},
];

const teamMembers = [
    { 
        name: 'Wu LiXing', 
        position: 'Team Leader',
        UOWID: '7770212',
        email: 'lwu010@mymail.sim.edu.sg',
        github: ''
    },
    { 
        name: 'Ngu Cheng Jie', 
        position: 'Team Member',
        UOWID: '8245800',
        email: 'cjngu001@mymail.sim.edu.sg',
        github: ''
    },
    { 
        name: 'Elisa', 
        position: 'Team Member',
        UOWID: '7771691',
        email: 'e014@mymail.sim.edu.sg',
        github: '' 
    },
    { 
        name: 'Lee Xin Rou', 
        position: 'Team Member',
        UOWID: '7574307',
        email: 'xrlee013@mymail.sim.edu.sg',
        github: '' 
    },
    { 
        name: 'Tay Boon Yaw', 
        position: 'Team Member',
        UOWID: '7895495',
        email: 'bytay003@mymail.sim.edu.sg',
        github: '' 
    },
    { 
        name: 'Wang ZiHang', 
        position: 'Team Member',
        UOWID: '7436543',
        email: 'zwang060@mymail.sim.edu.sg',
        github: '' 
    },
  // Add more team members here
];

const TeamStructure = () => {
    return (
        <section id="team" className="full-page-height bg-stone-200 py-12">
            <div id="supervisors-assessors" className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">Supervisor and Assessor</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {supervisorAndAssessor.map((person, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                            <h3 className="text-2xl font-semibold text-gray-900">{person.name}</h3>
                            <p className="text-lg font-medium text-gray-700">{person.position}</p>
                            <p className="mt-2">
                                <a href={`mailto:${person.email}`} className="text-blue-600 hover:underline flex items-center">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-lg mr-2" />
                                    {person.email}
                                </a>
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div id="team-structure" className="container mx-auto px-4 mt-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">Team Structure</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                            <h3 className="text-2xl font-semibold text-gray-900">{member.name}</h3>
                            <p className="text-lg font-medium text-gray-700">{member.position}</p>
                            {member.UOWID && 
                                <p className="mt-2"><strong>UOW ID:</strong> {member.UOWID}</p>}
                            {member.email && 
                                <p className="mt-2">
                                    <a href={`mailto:${member.email}`} className="text-blue-600 hover:underline flex items-center">
                                        <FontAwesomeIcon icon={faEnvelope} className="text-lg mr-2" />
                                        {member.email}
                                    </a>
                                </p>}
                            {member.github && 
                                <p className="mt-2">
                                    <a href={`https://github.com/${member.github}`} className="text-blue-600 hover:underline flex items-center" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faGithub} className="text-lg mr-2" />
                                        {member.github}
                                    </a>
                                </p>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TeamStructure;
